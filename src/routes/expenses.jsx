import Navigation from "../components/navigation";

const leftProps = { path: "/invoices", title: "Invoices" };
const rightProps = { path: "/", title: "Home" };

export default function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Navigation left={leftProps} right={rightProps} />
      <h2>Expenses</h2>
    </main>
  );
}
