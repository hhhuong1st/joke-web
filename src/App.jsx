import { useState, useEffect } from 'react'
import { supabase } from './supabase'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [newJoke, setNewJoke] = useState('')
  const [loading, setLoading] = useState(true)

  // Gọi hàm lấy dữ liệu khi trang web vừa tải xong
  useEffect(() => {
    fetchJokes()
  }, [])

  const fetchJokes = async () => {
    setLoading(true)
    // Truy vấn vào bảng 'jokes' trên Supabase
    const { data, error } = await supabase
      .from('jokes')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Lỗi khi tải dữ liệu:', error)
    } else {
      setJokes(data)
    }
    setLoading(false)
  }

  const addJoke = async (e) => {
    e.preventDefault()
    if (!newJoke.trim()) return

    // Thêm dữ liệu mới vào bảng 'jokes'
    const { error } = await supabase
      .from('jokes')
      .insert([{ content: newJoke }])

    if (error) {
      console.error('Lỗi khi thêm:', error)
      alert('Có lỗi! Hãy đảm bảo bạn đã tạo bảng "jokes" trên Supabase nhé!')
    } else {
      setNewJoke('')
      fetchJokes() // Tải lại danh sách sau khi thêm thành công
    }
  }

  return (
    <div className="container">
      <div className="glass-card">
        <h1 className="title">✨ Thế Giới Truyện Cười ✨</h1>
        <p className="subtitle">Viết và lưu trữ những mẩu chuyện vui của bạn trực tiếp lên Supabase</p>
        
        <form onSubmit={addJoke} className="joke-form">
          <input 
            type="text" 
            value={newJoke}
            onChange={(e) => setNewJoke(e.target.value)}
            placeholder="Nhập một câu truyện cười..." 
            className="joke-input"
          />
          <button type="submit" className="joke-button">Đăng tải</button>
        </form>

        <div className="jokes-list">
          {loading ? (
            <p className="loading-text">Đang tải dữ liệu từ Supabase...</p>
          ) : jokes.length === 0 ? (
            <p className="empty-text">Kho tàng đang trống. Hãy là người đầu tiên đăng truyện!</p>
          ) : (
            jokes.map((joke) => (
              <div key={joke.id} className="joke-item">
                <p>{joke.content}</p>
                <span className="joke-date">
                  {new Date(joke.created_at).toLocaleDateString('vi-VN', {
                    hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric'
                  })}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
