import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Warning, Users } from "phosphor-react";

interface UserOption {
  id: string;
  first_name: string;
  last_name?: string;
  email: string;
  role: string;
}

export const TransactionLogAnalytics: React.FC = () => {
  const [errorSummary, setErrorSummary] = useState<string>("");
  const [users, setUsers] = useState<UserOption[]>([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
  };

  // Fetch users for dropdown
  useEffect(() => {
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

    fetchUsers();
  }, []);

  const fetchErrorSummary = async () => {
    if (!selectedUserId) {
      toast({
        title: "User Required",
        description: "Please select a user to get error summary",
        variant: "destructive",
      });
      return;
    }

    const selectedUser = users.find(user => user.id === selectedUserId);
    if (!selectedUser) {
      toast({
        title: "User Not Found",
        description: "Selected user not found",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const payload = {
        userId: selectedUser.id,
        email: selectedUser.email,
      };

      const response = await fetch(`${API_BASE_URL}/api/logs/summary`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        const summaryText = data.data?.summary || data.summary || "No error summary available";
        setErrorSummary(summaryText);
        
        toast({
          title: "Success",
          description: data.message || "Error summary generated successfully",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch error summary');
      }
    } catch (error: any) {
      console.error('Error fetching error summary:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate error summary",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const clearSelection = () => {
    setSelectedUserId("");
    setErrorSummary("");
  };

  const selectedUser = users.find(user => user.id === selectedUserId);

  return (
    <div className="space-y-6">
      {/* User Selection */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users size={20} />
            Select User for Error Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">User</label>
              <Select onValueChange={setSelectedUserId} value={selectedUserId}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a user" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {users.map((user) => (
                    <SelectItem key={user.id} value={user.id}>
                      {user.first_name} {user.last_name} ({user.email})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedUser && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">Selected User Details</label>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm"><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</p>
                  <p className="text-sm"><strong>Email:</strong> {selectedUser.email}</p>
                  <p className="text-sm"><strong>ID:</strong> <code className="text-xs">{selectedUser.id}</code></p>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchErrorSummary} disabled={loading || !selectedUserId}>
              <Warning size={16} className="mr-2" />
              {loading ? "Generating..." : "Get Error Summary"}
            </Button>
            <Button onClick={clearSelection} variant="outline" disabled={loading}>
              Clear Selection
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Error Summary Results */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Warning size={20} />
            AI-Powered Error Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          {errorSummary ? (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Analysis Results for {selectedUser?.first_name} {selectedUser?.last_name}
                </h4>
                <Textarea
                  value={errorSummary}
                  readOnly
                  className="min-h-32 bg-white dark:bg-slate-900"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                This summary is generated using AI analysis of error patterns and frequencies for the selected user.
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <Warning size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No error summary available</p>
              <p className="text-sm text-muted-foreground">
                Select a user and click "Get Error Summary" to generate AI-powered error analysis
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};