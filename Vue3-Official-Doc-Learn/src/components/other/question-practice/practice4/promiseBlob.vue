<template>
    <div>
        <h1>圖像列表</h1>
        <div v-for="(image, index) in images" :key="index">
            index: {{ index }} | <img :src="image.url" :alt="image.title" width="300" />
        </div>
    </div>
</template>  
<script>
export default {
    data() {
        return {
            images: [] // 存儲圖像數據的數組
        };
    },
    async created() {
        try {
            const imageUrls = [
                'https://i.imgur.com/z7l6Qz8.png', // 省略 CORS 問題
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/220px-Flag_of_Wales.svg.png',
                'https://upload.wikimedia.org/wikipedia/commons/9/9a/DnD_Dragon.png'
            ];

            // 使用 Promise.all 和 async/await 來並行請求圖像
            const imagePromises = imageUrls.map(async (imageUrl, index) => {
                const response = await fetch(imageUrl);
                if (!response.ok) {
                    throw new Error('網絡錯誤');
                }
                const blob = await response.blob();
                return { url: URL.createObjectURL(blob), title: `圖片 ${index + 1}` };
            });

            // 等待所有圖像請求完成
            this.images = await Promise.all(imagePromises);
        } catch (error) {
            console.error('發生錯誤:', error);
        }
    }
};
</script>  