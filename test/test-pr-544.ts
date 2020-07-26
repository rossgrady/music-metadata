import {assert} from 'chai';
import * as mm from '../lib';

import * as path from 'path';

const t = assert;

const samplePath = path.join(__dirname, 'samples');

// https://github.com/Borewit/music-metadata/pull/544

describe('Add, change and fix some mappings #pr-544', () => {

    describe('Movement Name', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.movement, 'Movement Name', 'metadata.common.movement');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.movement, 'Movement Name', 'metadata.common.movement');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.movement, 'Movement Name', 'metadata.common.movement');
            });
        });
    });

    describe('Movement Index', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.movementIndex, {no: 1, of: 4}, 'metadata.common.movementIndex');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.movementIndex, {no: 1, of: 4}, 'metadata.common.movementIndex');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.movementIndex, {no: 1, of: 4}, 'metadata.common.movementIndex');
            });
        });
    });

    describe('Show Movement', () => {

        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.showMovement, true, 'metadata.common.showMovement');
            });
        });*/

        // No possibility found to write id3v22 test file
        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.showMovement, true, 'metadata.common.showMovement');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.showMovement, true, 'metadata.common.showMovement');
            });
        });
    });

    describe('Work', () => {

        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.work, 'Work', 'metadata.common.work');
            });
        });*/

        // No possibility found to write id3v22 test file
        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.work, 'Work', 'metadata.common.work');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.work, 'Work', 'metadata.common.work');
            });
        });
    });

    describe('Podcast', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcast, true, 'metadata.common.podcast');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcast, true, 'metadata.common.podcast');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcast, true, 'metadata.common.podcast');
            });
        });
    });

    describe('Podcast Category', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.category, ['Podcast Category'], 'metadata.common.category');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.category, ['Podcast Category'], 'metadata.common.category');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.category, ['Podcast Category'], 'metadata.common.category');
            });
        });
    });

    describe('Podcast Identifier', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcastId, '1234', 'metadata.common.podcastId');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcastId, '1234', 'metadata.common.podcastId');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcastId, '1234', 'metadata.common.podcastId');
            });
        });
    });

    describe('Podcast Keywords', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.keywords, ['Podcast Keywords'], 'metadata.common.keywords');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.keywords, ['Podcast Keywords'], 'metadata.common.keywords');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.keywords, ['Podcast Keywords'], 'metadata.common.keywords');
            });
        });
    });

    describe('Podcast Url', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcasturl, 'http://podcast.url', 'metadata.common.podcasturl');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcasturl, 'http://podcast.url', 'metadata.common.podcasturl');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.podcasturl, 'http://podcast.url', 'metadata.common.podcasturl');
            });
        });
    });

    describe('Short Description', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.subtitle, ['Short Description'], 'metadata.common.subtitle');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.subtitle, ['Short Description'], 'metadata.common.subtitle');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.subtitle, ['Short Description'], 'metadata.common.subtitle');
            });
        });
    });

    describe('Long Description', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.description, ['Long Description'], 'metadata.common.description');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.description, ['Long Description'], 'metadata.common.description');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.description, ['Long Description'], 'metadata.common.description');
            });
        });
    });

    describe('Album Artist Sort', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumartistsort, 'Album Artist Sort', 'metadata.common.albumartistsort');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumartistsort, 'Album Artist Sort', 'metadata.common.albumartistsort');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumartistsort, 'Album Artist Sort', 'metadata.common.albumartistsort');
            });
        });
    });

    describe('Album Sort', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumsort, 'Album Sort', 'metadata.common.albumsort');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumsort, 'Album Sort', 'metadata.common.albumsort');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.albumsort, 'Album Sort', 'metadata.common.albumsort');
            });
        });
    });

    describe('Artist Sort', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.artistsort, 'Artist Sort', 'metadata.common.artistsort');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.artistsort, 'Artist Sort', 'metadata.common.artistsort');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.artistsort, 'Artist Sort', 'metadata.common.artistsort');
            });
        });
    });

    describe('Composer Sort', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.composersort, 'Composer Sort', 'metadata.common.composersort');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.composersort, 'Composer Sort', 'metadata.common.composersort');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.composersort, 'Composer Sort', 'metadata.common.composersort');
            });
        });
    });

    describe('Title Sort', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.titlesort, 'Title Sort', 'metadata.common.titlesort');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.titlesort, 'Title Sort', 'metadata.common.titlesort');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.titlesort, 'Title Sort', 'metadata.common.titlesort');
            });
        });
    });

    describe('Copyright', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.copyright, 'Copyright', 'metadata.common.copyright');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.copyright, 'Copyright', 'metadata.common.copyright');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.copyright, 'Copyright', 'metadata.common.copyright');
            });
        });
    });

    describe('Compilation', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.compilation, true, 'metadata.common.compilation');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.compilation, true, 'metadata.common.compilation');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.compilation, true, 'metadata.common.compilation');
            });
        });
    });

    describe('Comment', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.comment, ['Tagged with Mp3tag v3.01'], 'metadata.common.comment');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.comment, ['Tagged with Mp3tag v3.01'], 'metadata.common.comment');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.deepEqual(metadata.common.comment, ['Tagged with Mp3tag v3.01'], 'metadata.common.comment');
            });
        });
    });

    describe('Release time', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.date, '2020-06-29T00:00:00.000Z', 'metadata.common.date');

                t.strictEqual(metadata.common.year, 2020, 'metadata.common.year');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.date, '2020-06-29T00:00:00.000Z', 'metadata.common.date');

                t.strictEqual(metadata.common.year, 2020, 'metadata.common.year');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.date, '2020-06-29T00:00:00.000Z', 'metadata.common.date');

                t.strictEqual(metadata.common.year, 2020, 'metadata.common.year');
            });
        });
    });

    describe('Original Album', () => {

        it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.originalalbum, 'Original Album', 'metadata.common.originalalbum');
            });
        });

        // No possibility found to write id3v22 test file
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.originalalbum, 'Original Album', 'metadata.common.originalalbum');
            });
        });*/

        // Not exists in MP4 (Written as comment)
        /*it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.originalalbum, 'Original Album', 'metadata.common.originalalbum');
            });
        });*/
    });

    describe('iTunes Video Quality', () => {

        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.hdVideo, 2, 'metadata.common.hdVideo');
            });
        });*/

        // No possibility found to write id3v22 test file
        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.hdVideo, 2, 'metadata.common.hdVideo');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.hdVideo, 2, 'metadata.common.hdVideo');
            });
        });
    });

    describe('iTunes Media Type', () => {

        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v24', () => {
            const filename = 'mp3/pr-544-id3v24.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.stik, 9, 'metadata.common.stik');
            });
        });*/

        // No possibility found to write id3v22 test file
        // Not exists in MP3 (Written as comment)
        /*it('mp3-id3v22', () => {
            const filename = 'mp3/pr-544-id3v22.mp3';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.stik, 9, 'metadata.common.stik');
            });
        });*/

        it('mp4', () => {
            const filename = 'mp4/pr-544.m4a';
            const filePath = path.join(samplePath, filename);

            return mm.parseFile(filePath).then(metadata => {
                t.strictEqual(metadata.common.stik, 9, 'metadata.common.stik');
            });
        });
    });
});
