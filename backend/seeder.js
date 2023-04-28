import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/ordertModel.js';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdusers = await User.insertMany(users);
    const adminUser = createdusers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
  } catch (error) {}
};
