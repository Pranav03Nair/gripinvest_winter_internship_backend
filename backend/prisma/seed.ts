import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // SEED ADMIN
  const adminMail = 'admin@gripinvest.com';
  const adminPass = 'admin@gripinvest.com';

  const existingAdmin = await prisma.users.findUnique({
    where: { email: adminMail },
  });

  if (existingAdmin) {
    console.log(
      `Admin exists already. Credentials:\n Email - ${adminMail}\n Pass - ${adminPass}`,
    );
  }

  if (!existingAdmin) {
    const password_hash = await bcrypt.hash(adminPass, 10);

    await prisma.users.create({
      data: {
        first_name: 'Admin',
        last_name: 'User',
        email: adminMail,
        password_hash,
        role: 'admin',
        risk_appetite: 'moderate',
        balance: 100000.0,
      },
    });

    console.log(
      `Admin created. Credentials:\n Email - ${adminMail}\n Pass - ${adminPass}`,
    );
  }

  // SEED PRODUCTS
  const products = [
    {
      name: 'Safe Gov IND Bond',
      investment_type: 'bond',
      tenure_months: 12,
      annual_yield: 6.5,
      risk_level: 'low',
      min_investment: 1000,
      max_investment: 50000,
      description: 'Government-backed bond with safe returns',
    },
    {
      name: 'Tech Startup FD',
      investment_type: 'fd',
      tenure_months: 6,
      annual_yield: 11.2,
      risk_level: 'high',
      min_investment: 5000,
      max_investment: 200000,
      description: 'Fixed deposit with a tech startup',
    },
    {
      name: 'Mutual Growth Plus Fund',
      investment_type: 'mf',
      tenure_months: 18,
      annual_yield: 9.0,
      risk_level: 'moderate',
      min_investment: 1500,
      max_investment: 75000,
      description: 'Balanced mutual fund with steady returns',
    },
  ];

  const admin = await prisma.users.findUnique({
    where: { email: adminMail },
  });

  for (const product of products) {
    const existingProduct = await prisma.investment_products.findFirst({
      where: { name: product.name },
    });

    if (existingProduct) {
      console.log(`Product exists already. Details:\n Email - ${product.name}`);
    }

    if (!existingProduct) {
      await prisma.investment_products.create({
        data: {
          name: product.name,
          investment_type: product.investment_type as any,
          tenure_months: product.tenure_months,
          annual_yield: product.annual_yield,
          risk_level: product.risk_level as any,
          min_investment: product.min_investment,
          max_investment: product.max_investment,
          description: product.description,
          created_by: admin!.id,
        },
      });

      console.log(`Product created. Details:\n Email - ${product.name}`);
    }
  }

  // SEED USERS
  const users = [
    {
      first_name: 'Ram',
      last_name: 'Raju',
      email: 'ram@raju.com',
      password: 'ram@raju.com',
      risk_appetite: 'low',
      balance: 50000.0,
    },
    {
      first_name: 'Shyam',
      last_name: 'Raju',
      email: 'shyam@raju.com',
      password: 'shyam@raju.com',
      risk_appetite: 'high',
      balance: 75000.0,
    },
  ];

  for (const user of users) {
    const existingUser = await prisma.users.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      console.log(
        `User exists already. Credentials:\n Email - ${user.email}\n Pass - ${user.password}`,
      );
    }

    if (!existingUser) {
      const password_hash = await bcrypt.hash(user.password, 10);
      await prisma.users.create({
        data: {
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password_hash,
          role: 'user',
          risk_appetite: user.risk_appetite as any,
          balance: user.balance,
        },
      });

      console.log(
        `User created. Credentials:\n Email - ${user.email}\n Pass - ${user.password}`,
      );
    }
  }
}

main()
  .catch((err) => {
    console.error('Error during seed', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
