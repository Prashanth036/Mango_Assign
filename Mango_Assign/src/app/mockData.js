
export const mockChatData = [
    {
        id: 1,
        userName: 'JohnDoe',
        message: 'Hey, how’s it going?',
        timestamp: '2024-10-15T09:05:00Z',
        userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: 2,
        userName: 'JaneSmith',
        message: 'All good, what about you?',
        timestamp: '2024-10-15T09:06:00Z',
        userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        id: 3,
        userName: 'JohnDoe',
        message: 'I’m doing great! Have you checked the new project updates?',
        timestamp: '2024-10-15T09:07:30Z',
        userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        id: 4,
        userName: 'JaneSmith',
        message: 'Not yet, I’ll look into it right now!',
        timestamp: '2024-10-15T09:08:45Z',
        userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
        id: 5,
        userName: 'AdminUser',
        message: 'Please remember to submit your reports by 5 PM today.',
        timestamp: '2024-10-15T09:09:00Z',
        userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        id: 6,
        userName: 'JaneSmith',
        message: 'Got it, thanks for the reminder!',
        timestamp: '2024-10-15T09:10:20Z',
        userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    }
];

export const chatArrData =async(fetch=true) => {
    return await new Promise((res, rej) => {
        const success = fetch;
        if (success) {
            res(mockChatData)
        } else {
            rej("Failed to fetch")
        }
    })
}
