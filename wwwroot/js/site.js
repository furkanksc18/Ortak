
        // Sidebar aç/kapa fonksiyonları
        document.querySelector('.toggle-btn').addEventListener('click', function() {
            document.querySelector('aside').classList.toggle('active');
        });
        
        document.querySelector('.close-btn').addEventListener('click', function() {
            document.querySelector('aside').classList.remove('active');
        });
        
        // Menü item'larına tıklanınca aktif yap
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                
                // Mobilde menüyü kapat
                if(window.innerWidth <= 768) {
                    document.querySelector('aside').classList.remove('active');
                }
            });
        });
