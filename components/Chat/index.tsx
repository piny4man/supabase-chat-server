import React, { useEffect, useState } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'

interface IProps {
	supabase: SupabaseClient
}


const Chat: React.FC<IProps> = ({ supabase }) => {
	const [ messages, setMessages ] = useState<any[]>([])

	const getMessages = async () => {
		let { data: messages, error } = await supabase
			.from('message')
			.select('*')
		setMessages(messages ?? [])
	}

	const setupMessagesSubscription = async () => {
		await supabase
			.from('message')
			.on('INSERT', payload => {
				console.log('Change received!', payload)
			})
			.subscribe()
	}

	useEffect(() => {
		getMessages()
		setupMessagesSubscription()
	}, [])

	return (
		<div>
			{ messages.map(m => <p key={ m.id } >{ m.content }</p>) }
		</div>
	)
}

export default Chat
