const version = 'v0.0.1';

const ENV = {
    dev: {
        env: 'development',
        appVersion: `${version} [Dev]`,
        apiUrl: '',
    },
    devlocal: {
        env: 'local',
        appVersion: `${version} [Dev Local]`,
        apiUrl: 'http://192.168.1.7:3000',
    },
    prod: {
        env: 'production',
        appVersion: version,
        apiUrl: '',
    },
}

export const getEnvVars = () => {
    return ENV.devlocal;
}