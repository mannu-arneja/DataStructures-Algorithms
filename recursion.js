// print comments objects in indented hierarchy:
// Comment 3
//   Comment 1
//     Comment 2
//     Comment 7
// Comment 5
//   Comment 4
//   Comment 6

const comments = [
    { id: 1, body: "Comment 1", parent: 3 },
    { id: 2, body: "Comment 2", parent: 1 },
    { id: 3, body: "Comment 3", parent: null },
    { id: 4, body: "Comment 4", parent: 5 },
    { id: 5, body: "Comment 5", parent: null },
    { id: 6, body: "Comment 6", parent: 5 },
    { id: 7, body: "Comment 7", parent: 1 }
];


printComments = (comments, findParent, indent) => {
    let str = ''

    for (comment of comments) {
        if (comment.parent === findParent) {

            for (let i = 0; i < indent; i++) {
                str += '  '
            }

            str += comment.body + '\n'
            str += printComments(comments, comment.id, indent + 1)
        } 
    }

    return str
}

console.log(printComments(comments, null, 0))