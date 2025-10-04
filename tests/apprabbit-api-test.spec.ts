import { test, expect, request } from '@playwright/test';
import type { APIRequestContext, APIResponse } from '@playwright/test';

test('should return 201 status', async ({ page }) => {
    const apiRequestContext: APIRequestContext = await request.newContext();

    const apiResponse: APIResponse = await apiRequestContext.post(
        "https://api.apprabbit.app/api/auth/authn/login/0f4574aa-1722-40fe-9e55-ee60ed81419d", {
        data: {
            "email": "jasndoner@gmail.com",
            "password": "puD2i!b7P7RnXX8"
        }
    });

    expect(apiResponse.status()).toBe(201);
});

test('should return 401 status due to invalid email', async ({ page }) => {
    const apiRequestContext: APIRequestContext = await request.newContext();

    const apiResponse: APIResponse = await apiRequestContext.post(
        "https://api.apprabbit.app/api/auth/authn/login/0f4574aa-1722-40fe-9e55-ee60ed81419d", {
        data: {
            "email": "test@gmail.com",
            "password": "puD2i!b7P7RnXX8"
        }
    });

    expect(apiResponse.status()).toBe(401);
});

test('should return 401 status due to invalid password', async ({ page }) => {
    const apiRequestContext: APIRequestContext = await request.newContext();

    const apiResponse: APIResponse = await apiRequestContext.post(
        "https://api.apprabbit.app/api/auth/authn/login/0f4574aa-1722-40fe-9e55-ee60ed81419d", {
        data: {
            "email": "jasndoner@gmail.com",
            "password": "test"
        }
    });

    expect(apiResponse.status()).toBe(401);
});