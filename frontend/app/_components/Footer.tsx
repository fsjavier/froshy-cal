export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Family Calendar App. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
