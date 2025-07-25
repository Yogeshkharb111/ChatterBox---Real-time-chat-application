import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

  {
    email: "priya.sharma@example.com",
    fullName: "Priya Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    email: "ananya.verma@example.com",
    fullName: "Ananya Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    email: "aarti.patel@example.com",
    fullName: "Aarti Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    email: "nikita.mehta@example.com",
    fullName: "Nikita Mehta",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    email: "isha.kumar@example.com",
    fullName: "Isha Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    email: "swati.singh@example.com",
    fullName: "Swati Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    email: "radhika.iyer@example.com",
    fullName: "Radhika Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    email: "neha.jain@example.com",
    fullName: "Neha Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
  },

  
  {
    email: "rahul.sharma@example.com",
    fullName: "Rahul Sharma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    email: "amit.verma@example.com",
    fullName: "Amit Verma",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    email: "arjun.patel@example.com",
    fullName: "Arjun Patel",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    email: "siddharth.kumar@example.com",
    fullName: "Siddharth Kumar",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    email: "vishal.singh@example.com",
    fullName: "Vishal Singh",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    email: "rohit.iyer@example.com",
    fullName: "Rohit Iyer",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    email: "deepak.jain@example.com",
    fullName: "Deepak Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/27.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("✅ Database seeded successfully with Indian users.");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

seedDatabase();
