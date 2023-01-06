//MSSDTNxTqCqEg9Pl
import { createClient } from '@supabase/supabase-js'
import { useEffect } from 'react';

const supabaseUrl = 'https://ntbuowmgxsczqggiysuf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50YnVvd21neHNjenFnZ2l5c3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1NzEzMzMsImV4cCI6MTk4NTE0NzMzM30.VvU3hSAGzlo46_QCmRt3SH-RqnlAv8IsTIlrY2Q34rM'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GetUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    console.log(user);
    localStorage.setItem('User', user.id);
    return user;
}

export { supabase, GetUser }


