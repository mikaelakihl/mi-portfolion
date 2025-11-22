# Vercel Deployment Guide

This project is now configured to deploy on Vercel.

## Quick Deploy

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

- **Client**: React + Vite frontend in `/client`
- **API**: Serverless functions in `/api`
- **Configuration**: `vercel.json` handles routing and build configuration

## API Endpoints

- `/api/cv` - Returns CV data
- `/api/health` - Health check endpoint

## Build Process

Vercel will automatically:
1. Install dependencies
2. Build the client application
3. Deploy serverless functions from the `/api` directory
4. Serve the static frontend with API routes proxied correctly

## Environment Variables

If you need environment variables, add them in the Vercel dashboard under Project Settings > Environment Variables.

