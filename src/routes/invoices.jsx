import Navigation from "../components/navigation";

const leftProps = { path: "/", title: "Home" };
const rightProps = { path: "/expenses", title: "Expenses" };

export default function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Navigation left={leftProps} right={rightProps} />
      <h2>Invoices</h2>
    </main>
  );
}
