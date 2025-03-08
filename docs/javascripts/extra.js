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
                    backgroundColor: "#000000",
                    right: 20,
                    bottom: 20,
                    size: 48,
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
                    tooltipMessage: 'Hi There 👋!',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'VLRChat',
                    titleAvatarSrc: 'https://vim-book.org/images/vlrchat-brain.png',
                    showAgentMessages: true,
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    starterPromptFontSize: 15,
                    clearChatOnReload: false,
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
                        sendButtonColor: '#3B81F6',
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
