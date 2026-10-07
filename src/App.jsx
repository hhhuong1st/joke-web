import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import './App.css'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="App">
      <h1>Kết nối Supabase + React</h1>
      <p>
        Trạng thái kết nối: {session ? 'Đã đăng nhập' : 'Chưa đăng nhập'}
      </p>
      <p>
        <em>Hãy đảm bảo bạn đã thay YOUR_SUPABASE_ANON_KEY trong file .env nhé!</em>
      </p>
    </div>
  )
}

export default App
