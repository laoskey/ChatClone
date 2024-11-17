import { supabase } from "@/lib/supabase";

export async function uploadImage(file: File) {
  try {
    const { data, error } = await supabase.storage
      .from("uploadFiles")
      .upload("/", file);

    if (error) return { error: "Upload file failed" };

    return { data };
  } catch (error) {
    return { errpor: error };
  }
}
