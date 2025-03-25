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
                    right: 20,
                    bottom: 7.5,
                    size: 50,
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://vim-book.org/images/vlrchat-brain.png",
                    autoWindowOpen: {
                        autoOpen: false,
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
                // Moved infoButton to top level of theme object
                infoButton: {
                    show: true,
                    text: "VLRChat only provides guidance based on the VIM Handbook!",
                    backgroundColor: "#FFD700",
                    iconColor: "white"
                },
                disclaimer: {
                    title: 'Disclaimer',
                    message: 'This chatbot will only provide information from the VIM Handbook',
                    textColor: 'black',
                    buttonColor: '#3b82f6',
                    buttonText: 'Start Chatting',
                    buttonTextColor: 'white',
                    blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)', //The color of the blurred background that overlays the chat interface
                    backgroundColor: 'white',
                    denyButtonText: 'Cancel',
                    denyButtonBgColor: '#ef4444',
                },
                chatWindow: {
                    showTitle: true,
                    title: 'VLRChat',
                    titleAvatarSrc: 'https://vim-book.org/images/vlrchat-brain.png',
                    showAgentMessages: true,
                    backgroundColor: "#ffffff",
                    // Set fullscreen to true for full screen display
                    fullScreen: true,
                    welcomeMessage: 'Hello! Please ask a clinical question. I will only use information from the VIMBook to answer!',
                    starterPrompts: [
                        "How do I treat hypertension?",
                        "Help me understand diabetes management!",
                        "Explain treatment options for catatonia."
                    ],
                    starterPromptFontSize: 15,
                    // height: 600,
                    // width: 800,
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
