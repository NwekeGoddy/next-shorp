import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import { Inter } from "@next/font/google";


export default function Home() {
  return (
    <Layout>
      <h2>Products</h2>
      <ul>
        <li>Product 1</li>
        <li>Product 1</li>
        <li>Product 1</li>
      </ul>
    </Layout>
  );
}
