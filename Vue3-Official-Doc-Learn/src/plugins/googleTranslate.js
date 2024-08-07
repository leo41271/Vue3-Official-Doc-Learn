// import { googleKey } from "./noPushToGitKey";//這也可用
export default {
    install: (app, options) => {
        const apiKey = options.apiKey;
        // 添加一個全域方法
        const translateInGoogle = async (text, targetLanguage ='zh-tw') => {
            const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
            const requestBody = {
                q: text,
                target: targetLanguage,
            };
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify(requestBody),
                });
                if (!response.ok) { throw new Error('Network response was not ok'); }
                const data = await response.json();
                return data.data.translations[0].translatedText;
            } catch (error) {
                console.error('Translation error:', error);
                return null;
            }
        };
        // 提供方法
        app.provide('translateInGoogle', translateInGoogle);

        app.config.globalProperties.$translateInGoogle = translateInGoogle
    }
};
// import axios from 'axios';
// export default {
//     install: (app, options) => {
//         // options 可以包含 Google Translate API 的 API Key
//         const apiKey = options.apiKey;
//         // 添加一個全域方法
//         app.config.globalProperties.$translate = async (text, targetLanguage) => {
//             const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
//             try {
//                 const response = await axios.post(url, {
//                     q: text,
//                     target: targetLanguage,
//                 });
//                 return response.data.data.translations[0].translatedText;
//             } catch (error) {
//                 console.error('Translation error:', error);
//                 return null;
//             }
//         };
//     }
// };