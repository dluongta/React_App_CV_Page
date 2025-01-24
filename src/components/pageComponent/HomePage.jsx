import React, { useEffect } from 'react';
import { About } from '../home/about/About';
import { Branding } from '../home/header/homes/Branding';
import { Home } from '../home/header/homes/Home';
import { Skill } from '../home/header/homes/Skill';
import { WrapperOne } from '../home/header/homes/WrapperOne';
import { Service } from '../home/services/Service';
import { Wrapper } from '../home/Wrapper';
import { City } from '../home/header/homes/City';
import { Link } from 'react-router-dom';
import hexagon from '../../assets/hexagon.png'; // Đảm bảo đường dẫn ảnh đúng

// Import the Particles component from react-tsparticles
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Dùng phiên bản slim để tối ưu hiệu suất

export const HomePage = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
      revealElements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Gọi hàm này khi trang tải

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cấu hình cho particles với ảnh hexagon nhỏ, rơi nhanh và thưa
  const particlesOptions = {
    fullScreen: {
      enable: true, // Bật chế độ toàn màn hình cho particles
      zIndex: 1000,   // Đảm bảo particles nằm dưới các phần tử khác
    },
    interactivity: {
      events: {
        onClick: {
          enable: true, // Bật sự kiện click
          mode: "push", // Thêm particles khi click
        },
        onHover: {
          enable: true, // Bật sự kiện hover
          mode: "repulse", // Làm cho particles di chuyển ra khỏi con trỏ
        },
      },
      modes: {
        push: {
          quantity: 10, // Số lượng particles khi click
        },
        repulse: {
          distance: 100, // Khoảng cách đẩy particles khi hover
        },
      },
    },
    particles: {
      number: {
        value: 50, // Giảm số lượng particles để làm chúng thưa hơn
      },
      size: {
        value: 12, // Giảm kích thước của các particles (ảnh nhỏ lại)
      },
      shape: {
        type: 'image',
        image: [
          {
            src: hexagon, // Ảnh hexagon cho particles
            width: 20,    // Chiều rộng của ảnh hexagon
            height: 20,   // Chiều cao của ảnh hexagon
          },
        ],
      },
      move: {
        enable: true,
        speed: 8, // Tăng tốc độ rơi của particles (rơi nhanh hơn)
        direction: 'bottom', // Hướng rơi xuống dưới
        random: true, // Cho phép di chuyển ngẫu nhiên trong màn hình
        straight: false, // Di chuyển theo hướng ngẫu nhiên
      },
      opacity: {
        value: 0.8, // Độ mờ của các particles
      },
    },
  };

  // Khởi tạo particles
  const particlesInit = (engine) => {
    loadSlim(engine); // Sử dụng phiên bản slim của tsparticles để tối ưu hiệu suất
    // loadFull(engine); // Có thể dùng phiên bản đầy đủ nếu cần nhiều tính năng hơn
  };

  return (
    <>
      {/* Particles toàn màn hình với ảnh hexagon nhỏ */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: 'fixed', // Vị trí cố định để phủ toàn bộ màn hình
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000, // Đảm bảo particles nằm dưới các phần tử khác
        }}
      />

      {/* Nội dung chính */}
      <div id="mySidenav" className="sidenav">
        <Link to='/pages' id="pages"> Pages </Link>
        <Link to='/blog' id="blog"> Blog </Link>
        <Link to='/portfolio' id="portfolio"> Portfolio </Link>
        <Link to='/contact' id="contact"> Contact </Link>
      </div>

      {/* Các phần tử khác */}
      <Home className="reveal" />
      <Branding className="reveal" />
      <About className="reveal" />
      <Service className="reveal" />
      <Wrapper className="reveal" />
      <Skill className="reveal" />
      <City className="reveal" />
      <WrapperOne className="reveal" />
    </>
  );
};
