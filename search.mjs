const delayTime = 2000;

export const search = async (list, searchField, searchValue) => {
    const promise = new Promise(
        (resolve, reject) => setTimeout(() => {

            if (!list?.length || !searchField || !searchValue) {
                reject('Enter all needed params');
            }

            const result = list?.filter((person) => person[searchField] === searchValue);

            if (!result?.length) {
                reject('Nothing found')
            };

            resolve(result)
        }, delayTime)
    );

    return await promise
        .then((result) => {
            result.forEach((person) => {
                console.log(person.greatting(), person.getInfo())
            });
        })
        .catch((error) => console.log('Error: ', error));
}