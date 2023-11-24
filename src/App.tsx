import Profile from "./components/Profile"

const App = () => {
  return (
    <div className="h-screen bg-slate-300">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          Edit Profile
        </h1>
        <Profile />
      </div>
    </div>
  )
}

export default App