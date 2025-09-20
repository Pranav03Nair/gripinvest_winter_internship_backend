import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { ProductForm } from "@/components/admin/ProductForm";
import { ProductList } from "@/components/admin/ProductList";
import { TransactionLogAnalytics } from "@/components/admin/TransactionLogAnalytics";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvestmentProduct, InvestmentType, RiskLevel } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Plus, TrendUp, Users, Package, ChartBar } from "phosphor-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<InvestmentProduct[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [editingProduct, setEditingProduct] = useState<InvestmentProduct | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

  // Fetch products from API
  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/products/`);
      
      if (response.ok) {
        const data = await response.json();
        const productsData = data.data || data;
        setProducts(productsData);
      } else {
        console.error('Failed to fetch products:', response.status);
        toast({
          title: "Error",
          description: "Failed to fetch products",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to fetch products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/users`, {
        headers: getAuthHeaders(),
      });
      
      if (response.ok) {
        const data = await response.json();
        const usersData = data.data || data;
        setUsers(usersData);
      } else {
        console.error('Failed to fetch users:', response.status);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleProductSubmit = async (
    productData: Omit<InvestmentProduct, "id" | "created_at" | "updated_at">
  ) => {
    try {
      setLoading(true);
      
      if (editingProduct) {
        // Update existing product
        const response = await fetch(
          `${API_BASE_URL}/api/products/${editingProduct.id}/update`,
          {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(productData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const updatedProduct = data.data || data;
          
          setProducts((prev) =>
            prev.map((p) => (p.id === editingProduct.id ? updatedProduct : p))
          );
          
          toast({
            title: "Product Updated",
            description: `${productData.name} has been updated successfully.`,
          });
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to update product');
        }
      } else {
        // Create new product
        const response = await fetch(`${API_BASE_URL}/api/products/create`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(productData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Create product API response:', data);
          
          // Handle different response formats from backend
          const newProduct = data.data || data.product || data;
          
          setProducts((prev) => [newProduct, ...prev]);
          
          toast({
            title: "Product Created",
            description: `${productData.name} has been created successfully.`,
          });
        } else {
          const errorData = await response.json();
          console.error('Create product failed:', errorData);
          throw new Error(errorData.message || 'Failed to create product');
        }
      }

      setShowForm(false);
      setEditingProduct(null);
    } catch (error: any) {
      console.error('Error submitting product:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save product",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product: InvestmentProduct) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/products/${id}/delete`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });

      if (response.ok) {
        const product = products.find((p) => p.id === id);
        setProducts((prev) => prev.filter((p) => p.id !== id));
        
        toast({
          title: "Product Deleted",
          description: `${product?.name} has been deleted successfully.`,
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete product');
      }
    } catch (error: any) {
      console.error('Error deleting product:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to delete product",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      title: "Total Products",
      value: products.length.toString(),
      icon: Package,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "High Risk Products",
      value: products
        .filter((p) => p.risk_level === RiskLevel.HIGH)
        .length.toString(),
      icon: ChartBar,
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      title: "Total Users",
      value: users.length.toString(),
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">
                Manage investment products and monitor platform performance
              </p>
            </div>
            <Button onClick={() => setShowForm(true)} variant="hero">
              <Plus size={16} className="mr-2" />
              Add Product
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="financial-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}
                      >
                        <stat.icon size={24} className={stat.color} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="products" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="transactionLogs">Transaction Logs</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="space-y-6">
              {showForm ? (
                <ProductForm
                  product={editingProduct || undefined}
                  onSubmit={handleProductSubmit}
                  onCancel={() => {
                    setShowForm(false);
                    setEditingProduct(null);
                  }}
                />
              ) : (
                <ProductList
                  products={products}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              )}
            </TabsContent>

            <TabsContent value="users">
              <Card className="financial-card">
                <CardHeader>
                  <CardTitle>User Management ({users.length} users)</CardTitle>
                </CardHeader>
                <CardContent>
                  {users.length > 0 ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users.map((user) => (
                          <Card key={user.id} className="p-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">
                                  {user.first_name} {user.last_name}
                                </h4>
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    user.role === 'admin'
                                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                  }`}
                                >
                                  {user.role}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                              <div className="flex justify-between text-sm">
                                <span>Balance: ₹{Number(user.balance).toLocaleString()}</span>
                                <span className="capitalize">Risk: {user.risk_appetite}</span>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No users found.</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactionLogs">
              <TransactionLogAnalytics />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
