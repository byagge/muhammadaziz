document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
    
    // Add hover effect to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
    });
    
    // Add typing effect to CTA title
    const ctaTitle = document.querySelector('.cta-title');
    const originalText = ctaTitle.textContent;
    ctaTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            ctaTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(ctaTitle);
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.profile-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#2a2a2a';
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#1E1E1E';
            this.style.transform = 'translateY(0)';
        });
        
        // Add click animation
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(0)';
            }, 150);
        });
    });
    
    // Toggle sections
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.closest('.section');
            const content = section.querySelectorAll(':scope > *:not(.section-header)');
            const arrow = this.querySelector('svg');
            
            content.forEach(el => {
                if (el.style.display === 'none') {
                    el.style.display = 'block';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    el.style.display = 'none';
                    arrow.style.transform = 'rotate(-90deg)';
                }
            });
        });
    });
    
    // Add pulse animation to profile image
    const profileImage = document.querySelector('.profile-image');
    setInterval(() => {
        profileImage.style.borderColor = '#10B981';
        setTimeout(() => {
            profileImage.style.borderColor = '#2a2a2a';
        }, 1000);
    }, 2000);
    
    // Add click functionality for copy email button
    const copyEmailBtn = document.querySelectorAll('.profile-button')[1];
    copyEmailBtn.addEventListener('click', function() {
        navigator.clipboard.writeText('brian.do@example.com');
        
        // Show copied notification
        const notification = document.createElement('div');
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#10B981';
        notification.style.color = 'white';
        notification.style.padding = '8px 16px';
        notification.style.borderRadius = '4px';
        notification.style.fontWeight = '500';
        notification.style.zIndex = '1000';
        notification.textContent = 'Email copied to clipboard!';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 2000);
    });
    
    // Hide loading animation after 1.5 seconds
    setTimeout(() => {
        const loadingBar = document.querySelector('.loading-animation');
        loadingBar.style.opacity = '0';
        loadingBar.style.transition = 'opacity 0.5s ease';
    }, 1500);
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });
    
    // Apply fade-up animations
    const fadeElements = document.querySelectorAll('.fade-up');
    setTimeout(() => {
        fadeElements.forEach(el => {
            el.classList.add('active');
        });
    }, 300);
    
    // Custom cursor effect
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', function() {
        cursor.style.width = '15px';
        cursor.style.height = '15px';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    });
    
    // Hover effects for clickable elements
    const clickables = document.querySelectorAll('a, button, .project-card, .product-card, .social-icon, .header-icon, .theme-switch');
    
    clickables.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.backgroundColor = 'rgba(16, 185, 129, 0.5)';
        });
    });
    
    // Copy email functionality
    const copyEmailBtns = document.querySelectorAll('.copy-email-btn');
    const toast = document.querySelector('.toast');
    
    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            navigator.clipboard.writeText('brian.do@example.com')
                .then(() => {
                    toast.classList.add('active');
                    setTimeout(() => {
                        toast.classList.remove('active');
                    }, 3000);
                });
        });
    });
    
    // Theme switcher
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;
    
    themeSwitch.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        
        const icon = themeSwitch.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        
        // Add animation to theme switch
        themeSwitch.classList.add('animate__animated', 'animate__flipInY');
        setTimeout(() => {
            themeSwitch.classList.remove('animate__animated', 'animate__flipInY');
        }, 1000);
    });
    
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create a ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            card.appendChild(ripple);
            
            // Position the ripple
            const rect = card.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
            
            // Remove ripple after animation completes
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Simulate navigation effect
            document.body.style.opacity = '0.8';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 300);
        });
    });
    
    // Parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        document.querySelectorAll('.section').forEach((section, index) => {
            section.style.transform = `translateY(${scrollTop * -0.03 * (index * 0.3 + 0.1)}px)`;
        });
    });
    
    // Interactive profile image
    const profileImage = document.querySelector('.profile-image');
    
    profileImage.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        this.style.transform = `perspective(500px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.05)`;
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(500px) rotateY(0) rotateX(0) scale(1)';
    });
    
    // Loading simulation
    setTimeout(() => {
        document.querySelector('.loading-bar').style.display = 'none';
    }, 1500);
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.header-icon:last-child');
    
    mobileMenuToggle.addEventListener('click', function() {
        const mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');
        
        mobileMenu.innerHTML = `
            <div class="mobile-menu-header">
                <div class="profile-image">
                    <img src="/api/placeholder/50/50" alt="Brian Do" />
                </div>
                <div class="close-menu">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <nav class="mobile-nav">
                <a href="#" class="mobile-nav-item">Home</a>
                <a href="#" class="mobile-nav-item">Projects</a>
                <a href="#" class="mobile-nav-item">Products</a>
                <a href="#" class="mobile-nav-item">About Me</a>
                <a href="#" class="mobile-nav-item">Contact</a>
            </nav>
        `;
        
        document.body.appendChild(mobileMenu);
        
        setTimeout(() => {
            mobileMenu.classList.add('active');
        }, 10);
        
        const closeMenu = mobileMenu.querySelector('.close-menu');
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            
            setTimeout(() => {
                mobileMenu.remove();
            }, 300);
        });
    });
    
    // 3D hover effect for cards
    const cards = document.querySelectorAll('.project-card, .product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 15;
            const angleY = (centerX - x) / 15;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.02)`;
            this.style.boxShadow = `${angleY * -0.5}px ${angleX * 0.5}px 20px rgba(0, 0, 0, 0.4)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        });
    });
    
    // Dynamic gradient animation
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))';
            this.style.backgroundSize = '200% 200%';
            this.style.backgroundPosition = '0% 0%';
            this.style.animation = 'gradientAnimation 10s ease infinite';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.background = 'var(--bg-secondary)';
            this.style.animation = 'none';
        });
    });
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('social-sidebar');
    const toggle = document.getElementById('sidebar-toggle');

    // Появление через 5.5 секунд
    setTimeout(() => sidebar.classList.add('visible'), 5500);

    // Раскрытие / сворачивание
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
  // Инициализация карусели
  const carousel = {
      items: [],
      currentIndex: 0,
      
      init() {
          this.carouselInner = document.querySelector('.carousel-inner');
          this.items = Array.from(document.querySelectorAll('.carousel-item'));
          this.modal = document.getElementById('modalOverlay');
          this.modalImage = document.getElementById('modalImage');

          // Делегирование событий для клика по изображениям
          this.carouselInner.addEventListener('click', (e) => {
              const clickedImg = e.target.closest('.carousel-item img');
              if (!clickedImg) return;
              
              // Находим индекс именно того изображения, по которому кликнули
              const clickedIndex = this.items.findIndex(item => 
                  item.querySelector('img') === clickedImg
              );
              
              if (clickedIndex > -1) {
                  this.currentIndex = clickedIndex;
                  this.openModal();
              }
          });

          // Обработчики для модального окна
          document.querySelector('.modal-close').addEventListener('click', () => this.closeModal());
          document.querySelector('.modal-nav.prev').addEventListener('click', () => this.prev());
          document.querySelector('.modal-nav.next').addEventListener('click', () => this.next());
          
          document.addEventListener('keydown', (e) => {
              if (!this.modal.classList.contains('active')) return;
              
              if (e.key === 'Escape') this.closeModal();
              if (e.key === 'ArrowLeft') this.prev();
              if (e.key === 'ArrowRight') this.next();
          });
      },

      openModal() {
          // Получаем URL изображения из текущего элемента карусели
          const activeImage = this.items[this.currentIndex]
              .querySelector('img')
              .getAttribute('src');
          
          this.modalImage.src = activeImage;
          this.modal.classList.add('active');
      },

      closeModal() {
          this.modal.classList.remove('active');
      },

      prev() {
          this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
          this.updateModalImage();
      },

      next() {
          this.currentIndex = (this.currentIndex + 1) % this.items.length;
          this.updateModalImage();
      },

      updateModalImage() {
          const newImage = this.items[this.currentIndex]
              .querySelector('img')
              .getAttribute('src');
          
          this.modalImage.src = newImage;
      }
  };

  // Запускаем инициализацию
  carousel.init();
});

// Animation for skill progress bars
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
    
    // Add hover effect for skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const progressBar = this.querySelector('.skill-progress-bar');
            progressBar.style.opacity = '0.9';
            progressBar.style.filter = 'brightness(1.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            const progressBar = this.querySelector('.skill-progress-bar');
            progressBar.style.opacity = '1';
            progressBar.style.filter = 'brightness(1)';
        });
    });
});