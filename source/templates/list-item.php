<li class="stat-list__item stat-item">
  <div class="stat-item__image-inner">
    <img class="stat-item__image" src=<?= $item['photo_50'] ?> alt="">
  </div>
  <a class="stat-item__name link" <?= 'href="https://vk.com/club' . $item['id'] . '"' ?> target="_blank">
    <?= $item['name'] ?>
  </a>
  <p class="stat-item__members-count">
    <?= number_format($item['members'], 0, '', ' ') ?>
  </p>
  <a class="stat-item__coverage <?= $item['reach'] ? '' : 'stat-item__coverage--lock' ?> link"
  <?= $item['reach'] ? 'href="http://vk.com/stats?act=reach&gid=' . $item['id'] . '"  target="_blank"' : '' ?>">
    <?= $item['reach'] ? number_format($item['reach'], 0, '', ' ') : '' ?>
  </a>
  <a class="stat-item__visitors <?= $item['visitors'] ? '' : 'stat-item__visitors--lock' ?> link"
  <?= $item['visitors'] ? 'href="http://vk.com/stats?gid=' . $item['id'] . '"  target="_blank"' : '' ?>>
    <?= $item['visitors'] ? number_format($item['visitors'], 0, '', ' ') : '' ?>
  </a>
  <p class="stat-item__growth">
    <span class="stat-item__growth-abs">
      <?= number_format($item['growth-abs'], 0, '', ' ') ?>
    </span>
    <span class="stat-item__growth-percent">
      <?= number_format($item['growth-percent'], 2, '.', '') . "%" ?>
    </span>
  </p>
</li>
