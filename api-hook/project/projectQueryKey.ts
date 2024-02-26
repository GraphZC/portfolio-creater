const projectQueryKeys = {
    all: ['project'],
    detail: (id: string) => [...projectQueryKeys.all, id],
};

export default projectQueryKeys;