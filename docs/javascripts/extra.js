// Wait for document to be ready using RxJS document$ observable
document$.subscribe(() => {
    // Only add the script if it doesn't already exist (prevent duplicates)
    if (!document.getElementById('flowise-chatbot-script')) {
        console.log('Initializing Flowise chatbot...');
        
        // Create and append the script element
        const script = document.createElement('script');
        script.id = 'flowise-chatbot-script';
        script.type = 'module';
        
        // Generate or get a user ID function
        // const getUserIdFunc = `
        //     function getUserId() {
        //         // Check if userId exists in localStorage
        //         let userId = localStorage.getItem('flowiseUserId');
                
        //         // If not, create a new one and store it
        //         if (!userId) {
        //             userId = 'user_' + Math.random().toString(36).substring(2, 15);
        //             localStorage.setItem('flowiseUserId', userId);
        //         }
                
        //         return userId;
        //     }
        // `;
        
        script.innerHTML = `
            // ${getUserIdFunc}
            
            // Wait for Flowise module to be available
            import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
    
            // Only initialize if not already initialized
            if (!window.flowiseChatbotInitialized) {
                window.flowiseChatbotInitialized = true;
                
                // Store the user ID in a variable
                // const currentUserId = getUserId();
                
                try {
                    // console.log('Starting Chatbot initialization with userId:', currentUserId);
                    
                    Chatbot.init({
                        chatflowid: "93708edc-bfb7-4fee-acfc-8f6a0fa72e02",
                        apiHost: "https://xlr-chat.app.flowiseai.com",
                        // chatflowConfig: {
                        //     userId: currentUserId,
                        //     analytics: {
                        //         langFuse: {
                        //             userId: currentUserId
                        //         }
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
                                blurredBackgroundColor: 'rgba(0, 0, 0, 0.4)',
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
                                fullScreen: true,
                                welcomeMessage: 'Hello! Please ask a clinical question. I will only use information from the VIMBook to answer!',
                                starterPrompts: [
                                    "How do I treat hypertension?",
                                    "Help me understand diabetes management!",
                                    "Explain treatment options for catatonia."
                                ],
                                starterPromptFontSize: 12,
                                fontSize: 14,
                                clearChatOnReload: false, // Very important: do not clear chat history
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
                                    maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 1000 characters.',
                                    autoFocus: true,
                                    sendMessageSound: false,
                                    receiveMessageSound: false,
                                },
                                feedback: {
                                    color: '#303235',
                                },
                                dateTimeToggle: {
                                    date: false,
                                    time: false
                                },
                                footer: {
                                    textColor: '#303235',
                                    text: '',
                                    company: '',
                                    companyLink: '',
                                }
                            }
                        }
                    });
                    console.log('Chatbot initialization completed');
                } catch (error) {
                    console.error('Error initializing Flowise chatbot:', error);
                }
            } else {
                console.log('Flowise chatbot already initialized, skipping...');
            }
        `;
        
        // Add the script to the document
        document.body.appendChild(script);
        console.log('Chatbot script added to the page');
    } else {
        console.log('Flowise chatbot script already exists, skipping initialization');
    }
});
