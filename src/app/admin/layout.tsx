import Sidebar from "./components/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <section className="min-h-screen flex">  
        {/* Main Content */}
        <Sidebar/>
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </section>
    )
  }