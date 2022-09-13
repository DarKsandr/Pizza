<template>
    <div class="card h-100">
        <div class="card-header">
            <div class="fw-bold">
                <slot name="header"></slot>
            </div>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>