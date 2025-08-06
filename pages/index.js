// CLEAN VERSION (NO EXTERNAL DEPENDENCIES)
// FIXES ALL: no shadcn/ui, no framer-motion, no alias path errors

import React from "react";

const Button = ({ children }) => (
  <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold">
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-zinc-900 rounded-2xl shadow-lg p-4">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Home = () => {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          OVERTHINKER®
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-300">
          Minimalism meets depth. Oversized 400 GSM fleece hoodies designed to
          wrap overthinkers in comfort, thought, and expression.
        </p>
        <Button>Shop Now</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {["Black", "Olive", "Light Rust"].map((color) => (
          <Card key={color}>
            <CardContent>
              <img
                src={`/images/model-${color.toLowerCase().replace(" ", "-")}.jpg`}
                alt={`${color} Overthinker Hoodie on model`}
                className="w-full h-80 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-1">{color} Hoodie</h2>
              <p className="text-sm text-gray-400 mb-3">
                400 GSM fleece. Oversized. Embroidered with thought.
              </p>
              <Button>Buy Now</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-zinc-950 py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">
          For Overthinkers, By Overthinkers
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Your mind runs deep — your wardrobe should too. Overthinker® hoodies
          are designed to reflect introspection, purpose, and premium comfort.
        </p>
        <Button>Explore More</Button>
      </section>

      <section className="bg-gradient-to-b from-zinc-900 to-black py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">🧐 Mental Wellness Toolkit</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Every hoodie includes a QR code linking to guided breathing sessions,
          journaling prompts, and our exclusive digital Overthinker's Corner.
        </p>
        <img
          src="/images/qr-preview.png"
          alt="QR Code for Mental Health Toolkit"
          className="mx-auto h-32 w-32 rounded-md border border-gray-700"
        />
        <p className="text-sm text-gray-500 mt-4">
          Scan & reflect — it's stitched into the experience.
        </p>
      </section>

      <footer className="bg-black text-gray-500 py-6 text-center text-sm">
        © 2025 OVERTHINKER®. All rights reserved.
      </footer>
    </main>
  );
};

export default Home;
