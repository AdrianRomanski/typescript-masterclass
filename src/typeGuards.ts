export function typeGuards() {
    typeOfTypeGuard();
    instanceOfTypeGuard();
}

function typeOfTypeGuard() {
    function foo(bar: string | number) {
        if(typeof bar === 'string') {
            // string
            return bar.toUpperCase();
        }
        if(typeof bar === 'number') {
            return bar.toFixed(2);
        }
    }

    class Song {
        constructor(public title: string, public duration: string | number) {}
    }

    function getSongDuration(item: Song) {
        if(typeof item.duration === 'string'){
            return item.duration;
        }
        const {duration} = item;
        const minutes = Math.floor(duration / 60000);
        const seconds = (duration/ 1000) % 60;
        return `${minutes}:${seconds}`;
    }

    const songDurationFromString = getSongDuration(
        new Song('Wonderful Wonderful', '05:31')
    )
    // console.log(songDurationFromString);
    const songDurationFromMs = getSongDuration(
        new Song('Wonderful Wonderful', 330000)
    )
    // console.log(songDurationFromMs);
}

function instanceOfTypeGuard() {
    class Foo {
        bar() {}
        bar1() {}
        bar2() {}
    }

    const bar = new Foo();
    //
    // console.log(bar instanceof Foo);
    // console.log(Object.getPrototypeOf(bar) === Foo.prototype);

    const exists = 'localStore' in window;

    // console.log('localStore in window', exists);

    for(const prop in bar) {
        // console.log(prop);
    }

    class Song {
        kind: 'song';
        constructor(public title: string, public duration: number) {

        }
    }
    class Playlist {
        kind: 'playlist'
        constructor(public name: string, public songs: Song[]) {
        }
    }

    function isSong(item: any): item is Song {
        return item instanceof Song;
    }

    function isSong2(item: any): item is Song {
        return 'title' in item;
    }

    function getItemName(item: Song | Playlist) {
        if(isSong2(item)) {
            return item.title;
        }
        return item.name;
    }

    function getItemName2(item: Song | Playlist) {
        if(item.kind === 'song') {
            return item.title;
        }
        return item.name;
    }

    const songName = getItemName(new Song('Wonderful Wonderful', 3000000));

    console.log('Song name', songName);

    const playlistName = getItemName(new Playlist(
        'The Best Songs', [new Song('The trooper', 30000)]
    ));

    console.log('Playlist name', playlistName);
}
