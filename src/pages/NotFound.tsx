import { DefaultLayout } from "../components";

export function NotFound() {
  return (
    <DefaultLayout title="Pop Movies" showBack>
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Page not found</h1>
        </div>
    </DefaultLayout>
  );
}
