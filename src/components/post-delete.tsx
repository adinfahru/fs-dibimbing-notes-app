'use client'

import { deletePost } from "@/app/actions/posts";

interface PostDeleteProps {
    id: string,
}

export default function PostDelete({ id }: PostDeleteProps) {
    const deleteAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        deletePost(id);
    };

    return <form onSubmit={deleteAction}>
        <button type="submit" className="mt-2 text-sm border p-2 hover:bg-red-500 hover:text-white text-red-500">Hapus</button>
    </form>
}
