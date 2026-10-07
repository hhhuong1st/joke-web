import React from 'react';
import './App.css';

function App() {
  return (
    <div className="news-app">
      {/* Header phong cách Báo Thanh Niên */}
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">THANH NIÊN</a>
          <nav className="nav-menu">
            <a href="#" className="nav-item">Thời sự</a>
            <a href="#" className="nav-item active">Giáo dục</a>
            <a href="#" className="nav-item">Giới trẻ</a>
            <a href="#" className="nav-item">Đời sống</a>
          </nav>
        </div>
      </header>

      {/* Nội dung chính */}
      <main className="main-content">
        <article className="article-section">
          <div className="breadcrumb">
            <a href="#">Trang chủ</a> &gt; <a href="#">Giáo dục</a> &gt; Gương mặt trẻ
          </div>

          <h1 className="article-title">
            Tấm gương sáng sinh viên: Em Huỳnh Huyền Hương - Niềm tự hào của Trường Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM (HOTEC)
          </h1>

          <div className="article-meta">
            <span className="author">Thanh Niên Online</span>
            <span className="date">07/10/2026 15:30 (GMT+7)</span>
          </div>

          <div className="sapo">
            Với nỗ lực không ngừng nghỉ, tinh thần ham học hỏi và năng lượng tích cực, Huỳnh Huyền Hương đã xuất sắc trở thành một trong những sinh viên tiêu biểu nhất của trường Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM (HOTEC), truyền cảm hứng mạnh mẽ cho thế hệ Gen Z.
          </div>

          <div className="article-body">
            <p>
              Sinh ra và lớn lên với niềm đam mê mãnh liệt dành cho công nghệ và kỹ thuật, <strong>Huỳnh Huyền Hương</strong> bước chân vào trường Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM (HOTEC) mang theo hoài bão lớn. Ngay từ những ngày đầu tiên, nữ sinh viên đã gây ấn tượng với thầy cô và bạn bè bởi sự thông minh, cá tính và tinh thần cầu tiến hiếm có.
            </p>

            <div className="image-container">
              {/* Bạn hãy đổi tên ảnh của bạn thành huong.jpg và bỏ vào thư mục public/ nhé */}
              <img 
                src="/huong.jpg" 
                alt="Chân dung sinh viên tiêu biểu Huỳnh Huyền Hương" 
                className="article-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400?text=Vui+long+them+anh+huong.jpg+vao+thu+muc+public";
                }}
              />
              <div className="image-caption">
                Nữ sinh viên ưu tú Huỳnh Huyền Hương với phong cách năng động, tự tin (Ảnh: Nhân vật cung cấp)
              </div>
            </div>

            <p>
              Không chỉ sở hữu thành tích học tập đáng nể ở các môn chuyên ngành phức tạp, Huyền Hương còn là nhân tố tích cực trong các phong trào của trường. Từ việc tham gia các câu lạc bộ học thuật, hỗ trợ tân sinh viên đến việc đóng góp ý tưởng cho các dự án lập trình thực tế, em luôn thể hiện rõ vai trò của một thủ lĩnh trẻ đầy nhiệt huyết.
            </p>

            <p>
              Chia sẻ về chặng đường học tập tại HOTEC, Hương bộc bạch: <em>"Môi trường tại trường Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM đã tạo cho em một bệ phóng vô cùng vững chắc. Thầy cô luôn tận tâm giải đáp, thiết bị thực hành hiện đại giúp em không chỉ nắm vững lý thuyết mà còn tự tin vào tay nghề thực tế. Em tin rằng chỉ cần cố gắng hết sức, mọi khó khăn trong ngành kỹ thuật đều có thể vượt qua."</em>
            </p>

            <p>
              Đại diện Đoàn trường HOTEC nhận xét: "Huỳnh Huyền Hương là một sinh viên đặc biệt. Em phá vỡ định kiến rằng con gái học kỹ thuật sẽ khô khan. Ngược lại, Hương rất sáng tạo, khéo léo và luôn biết cách truyền lửa cho bạn bè xung quanh. Em chính là đại diện cho thế hệ sinh viên HOTEC mới: <strong>Trí tuệ - Năng động - Sáng tạo</strong>."
            </p>

            <p>
              Với những hành trang vững chắc từ ghế nhà trường, tin chắc rằng Huỳnh Huyền Hương sẽ còn tiến xa hơn nữa trên con đường sự nghiệp phía trước, tiếp tục làm rạng danh ngôi trường Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM.
            </p>
          </div>
        </article>

        {/* Cột bên phải (Sidebar) */}
        <aside className="sidebar">
          <div className="sidebar-title">Tin tức nổi bật HOTEC</div>
          
          <div className="news-card">
            <a href="#" className="news-card-title">HOTEC chính thức công bố điểm chuẩn xét tuyển đợt 1 năm học 2026-2027</a>
          </div>
          
          <div className="news-card">
            <a href="#" className="news-card-title">Hàng ngàn sinh viên háo hức tham gia ngày hội việc làm và công nghệ</a>
          </div>
          
          <div className="news-card">
            <a href="#" className="news-card-title">Những lợi ích vượt trội khi chọn học tại Cao Đẳng Kinh Tế - Kỹ Thuật TP.HCM</a>
          </div>
          
          <div className="news-card">
            <a href="#" className="news-card-title">Gương sáng sinh viên: Từ cậu bé mê game đến chuyên gia bảo mật mạng</a>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
