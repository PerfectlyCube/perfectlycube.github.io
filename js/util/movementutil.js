export function moveSpeed(em, speed, forward, strafe) {

    em.setX(speed * strafe);
    em.setY(speed * forward);

}