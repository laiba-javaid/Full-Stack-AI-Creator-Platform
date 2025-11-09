import ImageKit from "imagekit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); // Load environment variables

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
});

imagekit.listFiles({ limit: 1 }, (error, result) => {
  if (error) {
    console.error("❌ Invalid credentials:", error.message);
  } else {
    console.log("✅ ImageKit connected successfully!");
  }
});
