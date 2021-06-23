import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import axios from 'axios';


const SongTable = (): React.ReactElement => {

    type SongType = {
        id: number,
        name: string,
        genre: string
    };

    const [songList, setSongList] = useState([] as SongType[]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/song/").then(res => {
            setSongList(res.data);
        });
    }, []);

    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                        <TableCell style={{ fontWeight: "bold" }}>Genre</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {songList.map((song) => (
                        <TableRow key={song.id}>
                            <TableCell>{song.name}</TableCell>
                            <TableCell>{song.genre}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default SongTable;