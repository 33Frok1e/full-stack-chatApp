import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "elina.karimova@example.com",
    fullName: "Elina Karimova",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    email: "yuna.karimova@example.com",
    fullName: "Yuna Karimova",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "shruti.jain@example.com",
    fullName: "Shruti Jain",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "chizuru.mizuhara@example.com",
    fullName: "Mizuhara Chizuru",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "ruka.shinisharu@example.com",
    fullName: "Ruka Shinisaru",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "makima@example.com",
    fullName: "Makima",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "hinata.hiwaru@example.com",
    fullName: "Hinata Hiwaru",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "sakura.haruno@example.com",
    fullName: "Sakura Haruno",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "krishna.rati@example.com",
    fullName: "Rati Krishna",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "kakashi.hatake@example.com",
    fullName: "Kakashi Hatake",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "gojo.satoru@example.com",
    fullName: "Gojo Satoru",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "itachi.uchiha@example.com",
    fullName: "Itachi Uchiha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "naruto.uzumaki@example.com",
    fullName: "Naruto Uzumaki",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "sosuke.aizen@example.com",
    fullName: "Sosuke Aizen",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "kazuga.kanito@example.com",
    fullName: "Kazuga Kanito",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();