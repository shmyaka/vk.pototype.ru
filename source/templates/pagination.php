<?php if ($currentCount > 3): ?>
  <li class="pagination__item">
    <a class="pagination__link pagination__start-link" href="" data-count="start">>></a>
  </li>
<?php endif; ?>

<?php if ($currentCount > 2): ?>
  <li class="pagination__item">
    <a class="pagination__link" href="" data-count="<?= $currentCount - 2 ?>">
      <?= $currentCount - 2 ?>
    </a>
  </li>
<?php endif; ?>

<?php if ($currentCount > 1): ?>
  <li class="pagination__item">
    <a class="pagination__link" href="" data-count="<?= $currentCount - 1 ?>">
      <?= $currentCount - 1 ?>
    </a>
  </li>
<?php endif; ?>

<?php if ($maxCount > 0): ?>
  <li class="pagination__item">
    <a class="pagination__link pagination__link--active" href="" data-count="<?= $currentCount ?>">
      <?= $currentCount ?>
    </a>
  </li>
<?php endif; ?>

<?php if ($maxCount > $currentCount): ?>
  <li class="pagination__item">
    <a class="pagination__link" href="" data-count="<?= $currentCount + 1 ?>">
      <?= $currentCount + 1?>
    </a>
  </li>
<?php endif; ?>

<?php if (($maxCount - $currentCount) > 1): ?>
  <li class="pagination__item">
    <a class="pagination__link" href="" data-count="<?= $currentCount + 2 ?>">
      <?= $currentCount + 2?>
    </a>
  </li>
<?php endif; ?>


<?php if (($maxCount - $currentCount) > 2): ?>
  <li class="pagination__item">
    <a class="pagination__link pagination__end-link" href="" data-count="end">>></a>
  </li>
<?php endif; ?>
