import { createClient } from "@/utils/supabase/server"

const authentication = async () => {

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser();
    return user
}

const sessionUserId = async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        return user.id
    }
}

export { sessionUserId }
export default authentication