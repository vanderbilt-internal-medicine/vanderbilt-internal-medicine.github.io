document$.subscribe(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        Chatbot.init({
            chatflowid: "1887fe55-12c2-448b-8a3e-4a0a57a7841f",
            apiHost: "https://flowise-public.vlr.chat",
            chatflowConfig: {
                // topK: 2
            },
            theme: {
                button: {
                    backgroundColor: "#FFD700",
                    right: 30,
                    bottom: 10,
                    size: 60,
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://vim-book.org/images/vlrchat-brain.png",
                    autoWindowOpen: {
                        autoOpen: true,
                        autoOpenOnMobile: false,
                    },
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Ask a Clinical Question!',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 32,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'VLRChat',
                    titleAvatarSrc: 'https://vim-book.org/images/vlrchat-brain.png',
                    showAgentMessages: true,
                    backgroundColor: "#ffffff",
                    height: 1200,
                    width: 800,
                    fontSize: 16,
                    starterPromptFontSize: 15,
                    clearChatOnReload: true,
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://vim-book.org/images/vlrchat-brain.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#FFD700',
                        maxChars: 1000,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true,
                        sendMessageSound: false,
                        receiveMessageSound: false,
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: '',
                        company: '',
                        companyLink: '',
                    }
                }
            }
        })
    `;
    document.body.appendChild(script);
});
