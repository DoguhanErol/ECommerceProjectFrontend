# Node.js tabanlı bir imaj kullanıyorsan
FROM node:18

# Git ve diğer gerekli araçları yükle
RUN apt-get update && apt-get install -y git

# Çalışma dizini ayarla
WORKDIR /app

# Paketleri yükle (Örneğin, React projesi için)
COPY package.json ./
RUN npm install

# Kalan dosyaları kopyala
COPY . .

# Uygulamayı başlat
CMD ["npm", "run", "dev"]
