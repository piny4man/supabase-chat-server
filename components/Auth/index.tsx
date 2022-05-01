import React from 'react'
import {Session, SupabaseClient} from '@supabase/supabase-js'

interface IProps {
	supabase: SupabaseClient
}

const Auth: React.FC<IProps> = ({ supabase }) => {
	const signInWithGithub = () => {
		supabase.auth.signIn({
			provider: 'github'
		})
	}

	return (
		<div>
			<button onClick={ signInWithGithub }>Log in with Github</button>
		</div>
	)
}

export default Auth
