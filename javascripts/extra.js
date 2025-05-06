document$.subscribe(() => {
    // Create and append the script element
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
        // import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed@2.1.2/dist/web.js"
        // Generate or get a user ID
        const getUserId = () => {
            // Check if userId exists in localStorage
            let userId = localStorage.getItem('flowiseUserId');
            
            // If not, create a new one and store it
            if (!userId) {
                userId = 'user_' + Math.random().toString(36).substring(2, 15);
                localStorage.setItem('flowiseUserId', userId);
            }
            
            return userId;
        };
        Chatbot.init({
            chatflowid: "1887fe55-12c2-448b-8a3e-4a0a57a7841f",
            apiHost: "https://flowise-public.vlr.chat",
            // chatflowid: "bda1c921-106d-462e-97df-217a124219da",
            // apiHost: "https://xlr-chat.app.flowiseai.com",
            chatflowConfig: {
                // // topK: 2
                // // userId: getUserId(), // Add the userId here
                // // // For Langfuse tracking
                // // metadata: {
                // //     userId: getUserId()
                // // }
                // analytics: {
                //     langFuse: {
                //         userId: getUserId()
                //     }
                // }
            },
            // overrideConfig: {
            //     userId: getUserId(),
            //     "langFuse: {
            //         userId: getUserId()
            //     }
            // },
            theme: {
                button: {
                    backgroundColor: "#FFD700",
                    right: 20,
                    bottom: 7.5,
                    size: 40,
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
                    tooltipFontSize: 26,
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
                    starterPromptFontSize: 12,
                    // height: 600,
                    // width: 800,
                    fontSize: 14,
                    clearChatOnReload: true,
                    sourceDocsTitle: 'Sources:',
                    renderHTML: true,
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
