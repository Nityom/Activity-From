import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import ActivityForm from "@/components/ActivityForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <main className="flex-1 p-4">
          <ActivityForm />
        </main>
      </div>
    </div>
  );
}
