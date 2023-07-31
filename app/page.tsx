import Sidebar from "./navbar/Sidebar";
export default function Home() {
  return (
    <main className="grid grid-cols-[1fr_6fr]">
      <Sidebar />
      <div>content goes here</div>
    </main>
  );
}
