// app/debug/page.tsx
"use client";

import { supabase } from "@/app/lab/supabaseClient";
import { useEffect, useState } from "react";

export default function DebugPage() {
  const [state, setState] = useState<{ hasSession: boolean; error: unknown }>({
    hasSession: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession();
      setState({ hasSession: !!data.session, error });
    })();

    // 세션 변화도 같이 로그
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, session) => {
      setState({ hasSession: !!session, error: null });
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(state, null, 2)}</pre>;
}
