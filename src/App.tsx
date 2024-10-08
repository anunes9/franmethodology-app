import { RouterProvider } from "react-router-dom"
import AuthProvider from "./contexts/auth"
import { router } from "./services/router"

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
