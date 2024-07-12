import type { LoadersConfigType, ConfigProps } from '../types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

const LoadersConfig = ({ isDev }: ConfigProps): LoadersConfigType => {
    const cssLoaders = {
        test: /\.css$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                getCustomTransformers: () => {
                    return {
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    };
                },
                transpileOnly: isDev,
            },
        },
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    return [tsLoader, cssLoaders, svgLoader];
    // cssLoaders, svgLoader, imageLoader
};

export default LoadersConfig;
