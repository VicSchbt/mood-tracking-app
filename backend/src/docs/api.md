# Mood Tracking API Documentation

## Overview

This API allows users to sign up, log in, track their moods, log sleep and feelings, retrieve motivational quotes, and manage their user profile. All endpoints (except authentication) require a valid JWT token in the `Authorization` header.

---

## Authentication

### Sign Up

- **Endpoint:** `POST /auth/signup`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "string (min 8 chars)",
    "name": "string (required)"
  }
  ```
- **Responses:**
  - `201 Created`
    ```json
    {
      "token": "jwt-token",
      "user": { "id": "string", "name": "string", "email": "string" }
    }
    ```
  - `409 Conflict` — Email already in use
  - `400 Bad Request` — Validation error

### Login

- **Endpoint:** `POST /auth/login`
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "string (min 6 chars)"
  }
  ```
- **Responses:**
  - `200 OK`
    ```json
    {
      "token": "jwt-token",
      "user": { "id": "string", "name": "string", "email": "string" }
    }
    ```
  - `401 Unauthorized` — Invalid credentials
  - `400 Bad Request` — Validation error

---

## User

> **All endpoints require:** `Authorization: Bearer <token>`

### Get User Profile

- **Endpoint:** `GET /user/`
- **Responses:**
  - `200 OK`
    ```json
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "avatarUrl": "string | null"
    }
    ```
  - `404 Not Found` — User not found
  - `500 Internal Server Error`

### Update User Profile

- **Endpoint:** `PATCH /user/`
- **Request Body:**
  ```json
  {
    "name": "string (optional)",
    "avatarUrl": "string (optional)"
  }
  ```
- **Responses:**
  - `200 OK` — Updated user object (same as above)
  - `500 Internal Server Error`

---

## Logs

> **All endpoints require:** `Authorization: Bearer <token>`

### Get All Logs

- **Endpoint:** `GET /logs/`
- **Responses:**
  - `200 OK`
    ```json
    [
      {
        "id": "string",
        "userId": "string",
        "mood": -2 | -1 | 0 | 1 | 2,
        "feelings": ["string", ...],
        "journal": "string",
        "sleepHours": 1 | 3.5 | 5.5 | 7.5 | 9.5,
        "createdAt": "ISO date string"
      },
      ...
    ]
    ```
  - `500 Internal Server Error`

### Create Log

- **Endpoint:** `POST /logs/`
- **Request Body:**
  ```json
  {
    "mood": -2 | -1 | 0 | 1 | 2,
    "feelings": ["string", ...], // max 3, optional
    "journal": "string", // max 1000 chars, optional
    "sleepHours": 1 | 3.5 | 5.5 | 7.5 | 9.5
  }
  ```
- **Responses:**
  - `201 Created` — Created log object
  - `400 Bad Request` — Validation error
  - `500 Internal Server Error`

---

## Quotes

### Get Quote for Mood

- **Endpoint:** `GET /quotes/?mood=<mood>`
- **Query Parameters:**
  - `mood` (required): -2 | -1 | 0 | 1 | 2
- **Responses:**
  - `200 OK`
    ```json
    { "quote": "string" }
    ```
  - `400 Bad Request` — Mood is missing or invalid
  - `404 Not Found` — No quote found for this mood

---

## Error Handling

- All errors return a JSON object with a `message` or `error` field.
- Validation errors return status `400` with details.
- Authentication errors return status `401`.
- Not found errors return status `404`.
- Server errors return status `500`.

---

## Authentication

- All endpoints except `/auth/*` require a JWT in the `Authorization: Bearer <token>` header.
- Tokens are valid for 7 days.

---

## Example Usage

### Signup

```bash
curl -X POST https://your-api.com/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123","name":"Alice"}'
```

### Login

```bash
curl -X POST https://your-api.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Get User Profile

```bash
curl -H "Authorization: Bearer <token>" https://your-api.com/user/
```

### Create Log

```bash
curl -X POST https://your-api.com/logs/ \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"mood":1,"feelings":["happy"],"journal":"A good day","sleepHours":7.5}'
```
